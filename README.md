# api_nodejs_rocketseat <br>

Nessa api registramos usuários no banco MongoDB <br>
esse usuário pode autenticar e caso sua senha estiver errada <br>
ele pode recuperar seu acesso através de um token enviado pelo email. <br><br>

Na api fizemos CRUD, onde o usuário pode cadastrar, atualizar, <br> pesquisar, e deletar projetos e tarefas

Usando ferramenta mailtrap (basicamente uma caixa de email fake) - essa <br> 
ferramenta de email personalizada é recomendada para testes, em produção usamos <br> 
outros métodos para entrega de email transacional, como: sparkpost, mailchimp, sendgrid <br><br>

Usando o pacote nodemailer-express-handlebars como template de email html <br><br>

