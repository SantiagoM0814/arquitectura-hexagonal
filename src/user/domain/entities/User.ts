interface UserProps {
  id: number;
  name: string;
  password: string;
  email: string;
}

export class User {
  id: number;
  name: string;
  password: string;
  email: string;

  constructor({ id, name, password, email }: UserProps) {
    this.id = id;
    this.name = name;
    this.password = password;
    this.email = email;
  }
}
