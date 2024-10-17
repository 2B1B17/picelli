const
{exec} = require('child_process');

exec('cat /flag.txt', (error, stdout, stderr) = > {
if (error)
{
    console.log(`Error: ${error.message}
`);
return;
}
console.log(`Flag: ${stdout}
`);
});
