export interface Config{
  server:Server;
  database:Database;
}

export interface Server {
  port:number;
}

export interface Database {
  dbname:string;
  user:string;
  password:string;
  host:string;
  port:number;
}