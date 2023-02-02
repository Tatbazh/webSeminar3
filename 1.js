let cels = parseFloat(prompt("Введите температуру в градусах Цельсия "));
function farengeit(cels) {
    return 9 / 5 * cels + 32;
}
alert(`Цельсия ${+cels.toFixed(1)}, Фаренгейт ${+farengeit(cels).toFixed(1)}`);