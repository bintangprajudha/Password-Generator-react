export default function Generate({generate}) {
    return (
        <button
        type="button"
        className="btn btn-light mb-3 mt-4 btn-sm"
        onClick={generate}
      >
        Generate
      </button>
    )
}