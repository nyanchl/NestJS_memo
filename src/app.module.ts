import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // 追加
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    TasksModule,
    // importsに追加
    TypeOrmModule.forRoot({
      type: 'postgres', // DBの種類
      port: 5432, // 使用ポート
      database: 'todoapp', // データベース名
      host: 'localhost', // DBホスト名
      username: 'daichi', // DBユーザ名
      password: '1212', // DBパスワード
      synchronize: true, // モデル同期(trueで同期)
      entities: [__dirname + '/**/*.entity.{js,ts}'], // ロードするエンティティ
    }),
  ],
})
export class AppModule {}
