export default function App({ callback }) {
    // Callback will be called when the div is first created.
    return (
        <div ref={callback}>
            <h1>Hello World!!!</h1>
        </div>
    );
}