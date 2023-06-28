import './styles.css';

export default function SearchBar() {
    return (
        <form className="ct-search-bar ct-container">
            <div>
                <input type='text' placeholder='Digite sua busca' />
                <button type='submit'>Buscar</button>
            </div>
        </form>
    );
}