import CoreConcept from "./CoreConcept"
import { CORE_CONCEPTS } from '../data.js';
export default function CoreConcepts() {
    return (
        <section id="core-concepts">
            <h2>المعجم المختصر</h2>
            <ul>
                {CORE_CONCEPTS.map((conceptItem) => (
                    <CoreConcept key={conceptItem.title} {...conceptItem} />
                ))}
            </ul>
        </section>
    )
}