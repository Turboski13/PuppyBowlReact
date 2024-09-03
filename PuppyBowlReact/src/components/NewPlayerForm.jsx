export default function NewPlayerForm() {
    return (
      <section id="new-player-section">
        <h2>Add a New Player</h2>
        <form id="new-player-form">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" required />

          <label for="breed">Breed</label>
          <input type="text" id="breed" name="breed" required />

          <label for="imageURL">Image URL</label>
          <input type="text" id="imageURL" name="imageURL" />

          <label for="team">Team</label>
          <input type="text" id="team" name="team" />

          <button id="submit" type="submit">Submit</button>
        </form>
      </section>
    );
  }

