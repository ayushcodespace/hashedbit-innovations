function correctfn(string, wrong, correct)
{
    return string.replace(new RegExp(wrong,'g'),correct);
}
console.log(correctfn("This is not the rimt sentence, But this is rimt","rimt","right"));