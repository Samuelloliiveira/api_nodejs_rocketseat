# api_nodejs_rocketseat <br>

Nessa api registramos usuários no banco de dados mongobd, além do registo fizemos toda parte de autenticação do usuário. <br>
Caso o usuário esqueça sua senha fizemos uma rota de recuperação onde é enviado um token para o seu email <br>
atráves do mailtrap (basicamente uma caixa de email fake). <br><br>

Mailtrap é recomendado para testes em ambiente de desenvolvimento, para produção temos outras ferramentas, como: <br>
sparkpost, mailchimp, sendgrid, entre outros. <br>
São métodos para entrega de email personalizados. <br><br>

Também criamos um CRUD, onde o usuário pode criar projetos e trarejas para o mesmo.

##

As dependencias usadas: <br>

 bcryptjs <br>
 body-parser <br>
 express <br>
 fs <br>
 jsonwebtoken <br>
 mongoose <br>
 nodemailer <br>
 nodemailer-express-handlebars <br>
 path <br><br>
 
 devDependencies: nodemon

##

Usamos o pacote nodemailer-express-handlebars como template de email html

