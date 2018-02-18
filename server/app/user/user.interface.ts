export interface FetchUsersOptions {
  results?: number;
  page?: number;
}

export interface FetchUsersResponse {
  results: FetchUsersResult[];
  info: Info;
}

export interface FetchUsersResult {
  gender: string;
  name: Name;
  email: string;
  dob: string;
  picture: Picture;
}

interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

interface Name {
  title: string;
  first: string;
  last: string;
}

interface Info {
  seed: string;
  results: number;
  page: number;
  version: string;
}
