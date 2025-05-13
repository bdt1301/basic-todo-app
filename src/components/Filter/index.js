import styles from "./Filter.module.scss"

function Filter({ currentFilter, onFilterChange }) {
    return (
        <div className={styles["filters"]}>
            <button onClick={() => onFilterChange('all')} disabled={currentFilter === 'all'}>
                All
            </button>
            <button onClick={() => onFilterChange('completed')} disabled={currentFilter === 'completed'}>
                Completed
            </button>
            <button onClick={() => onFilterChange('incomplete')} disabled={currentFilter === 'incomplete'}>
                Incomplete
            </button>
        </div>
    );
}

export default Filter;
