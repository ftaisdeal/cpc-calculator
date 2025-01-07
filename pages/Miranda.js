const Home = async function (res) {

  const { header, footer } = require('../components');

  const content = `<h1>Miranda Sorventi</h1>
  Miranda Sorventi was born in 1985 in a small village in Italy, coincidentally only a few kilometers from where Leonardo da Vinci was born. From an early age it was clear that Miranda possessed exceptional intelligence, as well as deep artistic gifts. Miranda taught herself to read before she could speak, and was late to begin speaking at all. When she did begin speaking at the age of four she spoke in complete, lengthy sentences of grammatical perfection, tinged with humor and deliberate ambiguity. It was also at the age of four that she completed her first drawing, an astonishing, highly detailed sepia of a fruit fly, which she labeled "<i>drosophila</i> deliberately in the style of Leonardo."
  <p>
  Miranda's parents, Arturo and Gabriella, were both artisans&emdash;he in pottery, and she in jewelery. Both were relatively uneducated, having barely graduated from high school, but Miranda grew up in an environment of creativity and fine esthetics. There was a small library in the village, and beginning at the age of five Miranda would visit the library daily, reading everything she could. There was a large dictionary of Italian in the library, which Miranda could frequently be seen studying with great intensity.`;

  res.send(`${header('Adventure Cabaret')}
${content}
${footer}`);

}

module.exports = Home;