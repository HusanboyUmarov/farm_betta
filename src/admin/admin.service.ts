import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt/dist';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin, AdminDocument } from './Schemas/admin.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin.name) private adminModel: Model<AdminDocument>,
    private readonly jwtservice: JwtService,
  ) {}
//........................................................................................................
  async create(createAdminDto: CreateAdminDto) {
    const {password, confirm_password} = createAdminDto; 
    if( password !== confirm_password)
    return new BadRequestException('password is not correct')

    const hashed_password = await bcrypt.hash(password, 7)
    const createAdmin = await this.adminModel.create(({
      ...createAdminDto, 
      hashed_password
    }))
    const tokens = await this.getToken(createAdmin)
    const hashed_token = await bcrypt.hash(tokens.refreshToken, 7)
    const updateAdmin = await this.adminModel.findByIdAndUpdate(
      createAdmin._id, 
      {hashed_token}, 
      {new:true}
    )
    return updateAdmin;
  }

//........................................................................................................
  async getToken(admin: AdminDocument){
    const jwtPayload = {
      id: admin._id,
      is_active: admin.is_active, 
      is_creator: admin.is_creator
    };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtservice.signAsync(jwtPayload, {
        secret:process.env.ACCESS_TOKEN_KEY,
        expiresIn: process.env.ACCESS_TOKEN_TIME
        
      }),
      this.jwtservice.signAsync(jwtPayload, {
        secret: process.env.REFRESH_TOKEN_KEY, 
        expiresIn:process.env.REFRESH_TOKEN_TIME
      })
    ])
   return {
    refreshToken,
    accessToken}
  }
  //........................................................................................................
  async findAll() {
    const admins = await this.adminModel.find()
    return admins;
  }
//........................................................................................................

  async findOne(id: string) {
    return this.adminModel.findById(id).exec();
  }
//........................................................................................................
  update(id: string, updateAdminDto: UpdateAdminDto) {
    const updateAdmin= this.adminModel.findByIdAndUpdate(id, updateAdminDto, {new:true}).exec();
    if(!updateAdmin)
    throw new NotFoundException(`Admin #${id} not found`)
    return updateAdmin
  }
//........................................................................................................
  remove(id: number) {
    return this.adminModel.findByIdAndDelete(id);
  }
}
//........................................................................................................