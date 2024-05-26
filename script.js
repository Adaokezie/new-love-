document.getElementById('loveForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name1 = document.getElementById('name1').value.toLowerCase();
    const name2 = document.getElementById('name2').value.toLowerCase();

    if (name1 === "" || name2 === "") {
        document.getElementById('result').innerText = "Please enter both names.";
        return;
    }

    const name1Chars = name1.split('');
    const name2Chars = name2.split('');

    name1Chars.forEach(char => {
        const index = name2Chars.indexOf(char);
        if (index > -1) {
            name2Chars.splice(index, 1);
        } else {
            name1Chars.splice(name1Chars.indexOf(char), 1);
        }
    });

    const totalCount = name1Chars.length + name2Chars.length;

    const results = ["Friends", "Crushes", "Lovers", "Enemies", "Acquaintances"];
    const result = results[totalCount % results.length];

    document.getElementById('result').innerText = `Result: ${result}`;
});
