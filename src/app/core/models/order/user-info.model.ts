
export class UserInfo {
  _id: string;
  avatar: string;
  full_name: string;
  phone: string;

  constructor(_id: string = '', avatar: string = '', full_name: string = '', phone: string = '') {
    this._id = _id;
    this.avatar = avatar;
    this.full_name = full_name;
    this.phone = phone;
  }
}
