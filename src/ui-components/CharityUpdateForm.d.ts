/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Charity } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CharityUpdateFormInputValues = {
    title?: string;
};
export declare type CharityUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CharityUpdateFormOverridesProps = {
    CharityUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CharityUpdateFormProps = React.PropsWithChildren<{
    overrides?: CharityUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    charity?: Charity;
    onSubmit?: (fields: CharityUpdateFormInputValues) => CharityUpdateFormInputValues;
    onSuccess?: (fields: CharityUpdateFormInputValues) => void;
    onError?: (fields: CharityUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CharityUpdateFormInputValues) => CharityUpdateFormInputValues;
    onValidate?: CharityUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CharityUpdateForm(props: CharityUpdateFormProps): React.ReactElement;
