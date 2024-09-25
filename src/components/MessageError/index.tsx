import { IMessageError } from "../../common/interfaces/IError";

export default function MessageError({ children}: IMessageError) {
  return (
    <div>
      {children}
    </div>
  );
}
