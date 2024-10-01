import { IMessageError } from "src/common/interfaces/IError";

export default function MessageError({ children}: IMessageError) {
  return (
    <div>
      {children}
    </div>
  );
}
