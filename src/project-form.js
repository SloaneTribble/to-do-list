import { form } from "./form";

async function newProject() {
  const newForm = await form("project", "N/A");
  document.body.appendChild(newForm);
}

export { newProject };
