import {
  IsAlphanumeric,
  IsEmail,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsString,
  IsOptional,
  Matches,
  MinLength,
  IsBoolean,
} from 'class-validator';

const passwordRegEx =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,20}$/;

export class CreateNoteDto {
  @IsString()
  @MinLength(1, { message: 'Name must have atleast 1 characters.' })
  @IsNotEmpty()
  title: string;

  @IsString()
  @MinLength(1, { message: 'Name must have atleast 1 characters.' })
  @IsNotEmpty()
  content: string;

  @IsString()
  @IsOptional()
  category: string;

  @IsBoolean()
  published: boolean;

  // @IsNotEmpty()
  // @MinLength(3, { message: 'Username must have atleast 3 characters.' })
  // @IsAlphanumeric(null, {
  //   message: 'Username does not allow other than alpha numeric chars.',
  // })
  // username: string;

  // @IsNotEmpty()
  // @IsEmail(null, { message: 'Please provide valid Email.' })
  // email: string;

  // @IsInt()
  // age: number;

  // @IsString()
  // @IsEnum(['f', 'm', 'u'])
  // gender: string;

  // @IsNotEmpty()
  // @Matches(passwordRegEx, {
  //   message: `Password must contain Minimum 8 and maximum 20 characters,
  //     at least one uppercase letter,
  //     one lowercase letter,
  //     one number and
  //     one special character`,
  // })
  // password: string;
}
