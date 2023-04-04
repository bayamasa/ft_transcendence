# ft_transcendence

## Usage
初回は`make run`を実行してください  
dbの編集はschema.prismaファイルでmodelの編集をした後に`make migrate`を実行し、schema.prismaをコミットしてください  
現在はmigrateをすると元のデータが消えてしまう仕様になってるので、常時入れておきたいデータはprisma.seed.tsにデータを入れてください  

`make format`でfrontendとbackendを整形できます。

## APIの作成方法
`nest cli`を使用してテンプレートを作成します。  
```
nest generate resource
```
`What name would you like to use for this resource (plural, e.g., "users")? `→ 作成するAPIを記述 ex)users  
`What transport layer do you use?` → REST API  
`Would you like to generate CRUD entry points?` → Y

localhost/apiでswaggerが起動します。
各APIを作成するときにswaggerの記述もしてもらえるとありがたいです。
users.controller.tsを参考にしてみてください

その後はusersフォルダを参考にしてみてください。  
