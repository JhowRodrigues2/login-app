export type User = {
    id: number;
    name: string;
    email: string;
    password?: string;
  };
export type AuthContextType = {
    user: User | null
    signin: (email:string, password:string)=> Promise<boolean>
    singout : ()=> void
}  