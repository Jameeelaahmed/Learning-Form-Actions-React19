import { isName, isTitle, isBody } from "../utils/val";
import { useActionState, use } from "react";
import { OpinionsContext } from "../store/opinions-context";
import SubmitButton from "./SubmitButton";

export function NewOpinion() {
  const { addOpinion } = use(OpinionsContext)
  const [formState, formAction] = useActionState(Action, { errors: null });
  async function Action(prevState, formData) {
    const userName = formData.get('userName');
    const title = formData.get('title');
    const body = formData.get('body');

    const errors = [];

    if (!isName(userName)) {
      errors.push('You must provide your name');
    }

    if (!isTitle(title)) {
      errors.push('Title must be at least 5 characters long');
    }

    if (!isBody(body)) {
      errors.push('Opinion must be at least 10 characters long');
    }

    if (errors.length > 0) {
      return { errors, validValues: { userName, title, body } };
    }

    await addOpinion({ title, body, userName })

    return { errors: null };
  }
  // console.log(formState);
  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input type="text" id="userName" name="userName" defaultValue={formState.validValues?.name} />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" defaultValue={formState.validValues?.title} />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea id="body" name="body" rows={5} defaultValue={formState.validValues?.body}></textarea>
        </p>
        {formState.errors && (
          <ul className='error'>
            {formState.errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        )}
        <SubmitButton />
      </form>
    </div>
  );
}
