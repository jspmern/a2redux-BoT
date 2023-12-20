import { DEC, INC, SAVE } from "./actionConstant";

export function incHandler()
{
    return { type:INC}
}
export function decHandler()
{
    return {type:DEC}
}
export function saveHandler(data)
{
    return {type:SAVE,payload:data}
}