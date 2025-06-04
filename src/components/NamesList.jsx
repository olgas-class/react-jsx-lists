import AppButton from "./AppButton";
import SimpleListItem from "./SimpleListItem";
import StarTitle from "./StarTitle";

const NamesList = () => {
  const names = ["Pippo", "Pluto", "Paperino"];

  return (
    <section className="container">
      {/* <h2>⭐ Seizione con la lista di nomi ⭐</h2> */}
      <StarTitle titleText="Sezione con la lista di nomi" />
      <ul>
        {names.map((curName, index) => (
          <SimpleListItem key={`name-item-${index}`} itemText={curName} />
        ))}
      </ul>

      <AppButton text="Aggiungi un nome" />
    </section>
  );
};

export default NamesList;
