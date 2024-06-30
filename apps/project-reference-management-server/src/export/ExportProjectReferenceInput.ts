import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ArgsType()
class ExportProjectReferenceInput {
    @Field(() => String, {
        nullable: true
    })
    @ApiProperty({
        required: false,
        type: () => String
    })
    @Type(() => String)
    projectName?: string;

    @Field(() => String, {
        nullable: true
    })
    @ApiProperty({
        required: false,
        type: () => String
    })
    @Type(() => String)
    projectTypeId?: string;

    @Field(() => String, {
        nullable: true
    })
    @ApiProperty({
        required: false,
        type: () => String
    })
    @Type(() => String)
    businessLineId?: string;

    @Field(() => String, {
        nullable: true
    })
    @ApiProperty({
        required: false,
        type: () => String
    })
    @Type(() => String)
    responsiblePersonId?: string;

    @Field(() => String, {
        nullable: true
    })
    @ApiProperty({
        required: false,
        type: () => String
    })
    @Type(() => String)
    projectManagerId?: string;

    @Field(() => Date, {
        nullable: true
    })
    @Type(() => Date)
    startDate?: Date;

    @Field(() => Date, {
        nullable: true
    })
    @Type(() => Date)
    endDate?: Date;
}

export { ExportProjectReferenceInput as ExportProjectReferenceInput };