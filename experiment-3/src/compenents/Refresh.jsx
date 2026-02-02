export default function Refresh() { 
    return (
        <div>
            <button
                onClick={
                    () => {
                        window.location.reload();
                    }
                }
            >
                Refresh Logs!
            </button>
        </div>
    );
}