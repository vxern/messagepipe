export interface MessagePipeTransformer<Input = string, Output = string> {
    (value: Input, options?: Record<string, any>): Output;
}
export interface MessagePipeTransformers {
    [key: string]: MessagePipeTransformer;
}
export interface MessagePipeOptions {
    disableCache?: boolean;
}
export declare function MessagePipe(transformers?: MessagePipeTransformers, { disableCache }?: MessagePipeOptions): {
    compileRaw: <Output = string[]>(message: string) => (props?: Record<string, any>) => Output;
    compile: <Output_1 = string>(message: string) => (props?: Record<string, any>) => Output_1;
};
