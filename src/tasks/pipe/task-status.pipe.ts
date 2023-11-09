import { BadRequestException, PipeTransform } from '@nestjs/common';

export class TaskStatusPipe implements PipeTransform {
  readonly allowstatus = ['OPEN', 'PROGRESS', 'DONE'];

  transform(value: any) {
    // toUpperCase():小文字を大文字に変換
    value = value.toUpperCase();

    // 例外処理用の処理
    if (!this.isStasusValid(value)) {
      throw new BadRequestException();
    }

    return value;
  }
  // 11行目の例外処理で呼び出される関数
  private isStasusValid(status: any) {
    const result = this.allowstatus.indexOf(status);
    return result !== -1;
  }
}
