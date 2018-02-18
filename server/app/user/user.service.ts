import { Component } from '@nestjs/common';
import axios from 'axios';

import { FetchUsersOptions, FetchUsersResponse } from './user.interface';

@Component()
export class UserService {
  private readonly URL = 'https://randomuser.me/api/';

  async fetchUsers(options: FetchUsersOptions = {}) {
    options = { page: 1, results: 20, ...options };
    return (await axios.get<FetchUsersResponse>(
      `${this.URL}?results=${options.results}&page=${
        options.page
      }&inc=name,email,gender,dob,picture&nat=us,gb`
    )).data;
  }
}
