import { useFormStatus } from "react-dom"
export default function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <p className="actions">
            <button type="submit" disabled={pending}>
                {pending ? "Submiting" : "Submit"}
            </button>
        </p>
    )
}