let entrada = required('prompt-sync')();

let idade = entrada('Digite dua idade');
if (idade === 18)(
    console.log('Você pode se matricular na auto-escola');
)

if (idade > 18)(
    console.log('Você tem idade para dirigir caso tena a habilitação');
)
if (idade < 18)(
     console.log('Você não tem idade para dirigir!');
)