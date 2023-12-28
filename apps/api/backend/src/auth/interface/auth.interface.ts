import { ApiProperty } from "@nestjs/swagger";

export class IUserSignIn {
	@ApiProperty({
		description: "Email address of the user",
		example: "email@example.com",
	})
	email?: string;

	@ApiProperty({
		description: "Username of the user",
		example: "JhonDoe",
	})
	username?: string;

	@ApiProperty({
		description: "Password of the user",
		example: "password$123",
	})
	password: string;
}
