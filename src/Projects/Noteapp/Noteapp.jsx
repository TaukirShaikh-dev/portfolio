import styles from './Noteapp.module.css';
import {useState, useEffect, useRef} from 'react';

// NOTE APP STARTS HERE
export function NoteApp() {
    const [NoteArray, setNoteArray] = useState([]);
    const [Title, setTitle] = useState('Note Title');
    const [Content, setContent] = useState('Note content');
    const [Category, setCategory] = useState('work');
    const [isEditing, setIsEditing] = useState(false);
    const [updateId, setUpdateId] = useState(0);
    const [filteredArray, setFilteredArray] = useState(NoteArray);
    const [selectedStatus, setSelectedStatus] = useState('all');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [error, setError] = useState({});
    const Titleref = useRef(null);
    const Contentref = useRef(null);
    const Categoryref = useRef(null);


    //on page load get localStorage current data
    useEffect(() => {
        console.log('1 working');
        //get note key from localstorage
        const NoteArrayfromLocal = JSON.parse(localStorage.getItem('Note') || '[]');
        //change Notearray state value to localstorage note key value
        setNoteArray(NoteArrayfromLocal);
        setFilteredArray(NoteArrayfromLocal);
    }, []);

    useEffect(() => {
        console.log('2 working');

        if (NoteArray.length >= 0) {
            console.log('inside');
            //store noteArray in localstorage
            localStorage.setItem('Note', JSON.stringify(NoteArray));
            let updatedArray = NoteArray;
            console.log(updatedArray);
            // console.log(updatedArray);
            //filter notearray based on userselected status option
            if (selectedStatus === 'Completed') {
                updatedArray = NoteArray.filter((obj) => obj.complete)
            } else if (selectedStatus === 'not-Completed') {
                updatedArray = NoteArray.filter((obj) => !obj.complete)
            }

            // filter filterArray based on userselected category option
            if (selectedCategory !== 'all') updatedArray = updatedArray.filter((obj) => obj.category === selectedCategory)

            setFilteredArray(updatedArray);
        }
    }, [NoteArray, selectedStatus, selectedCategory]);

    //validator function
    function Validator() {
        let newError = {};
        let isError = false;

        //if title input field is empty then return true
        if(!Title) {
            isError = true;
            newError.title = 'Title is Required';
        }

        //if content input field is empty then return true
        if(!Content) {
             isError = true;
             newError.content = 'Content is Required';
        }

        //if content input field is empty then return true
        if(!Category) {
             isError = true;
             newError.content = 'Category is Required';
        }

        //change error state value to newError object
        setError(newError);
        return isError;
    }

    //insert function
    function handleInsert(e) {
        e.preventDefault();
        //update code
        if (isEditing === true) {
            //for each element of array compare updateid with each element id
            const updatedNoteArray = NoteArray.map((obj) => (
                //if match then update particular element value if not then return element as it is
                Number(obj.id) === updateId ? { ...obj, title: Title, content: Content, category: Category } : obj
            ))

            setNoteArray(updatedNoteArray);
            //make input field empty
            setTitle('');
            setContent('');
            setCategory('work');
            //change isediting state value to false
            setIsEditing(false);
            //remove focus from all input field
            Titleref.current.style.backgroundColor = '#fff';
            Contentref.current.style.backgroundColor = '#fff';
            Categoryref.current.style.backgroundColor = '#fff';
        } else {
            //if any input field empty then dont perform insert if not then perform insert operation
            if(Validator()) return;
            //insert code
            //create object for each note
            const obj = {
                id: Date.now(),
                title: Title,
                content: Content,
                category: Category,
                complete: false
            };
            //store object inside NoteArray
            setNoteArray([...NoteArray, obj]);
            //make input field empty
            setTitle('');
            setContent('');
            setCategory('work');
        }
    }

    //delete function
    function handleDelete(clickliId) {
        console.log(clickliId);
        //filter element from array those id does not match with clickliid
        const filteredArray = NoteArray.filter((obj) => Number(obj.id) !== clickliId);
        //change noteArray state value to filteredArray
        setNoteArray(filteredArray);
        console.log('deleted');
    }

    //edit function
    function handleEdit(clickliId) {
        //find element in array that id match with clickliid
        const matchObject = NoteArray.find((obj) => Number(obj.id) === clickliId);
        // console.log(matchObject);
        //fill particular element data inside form
        setTitle(matchObject.title);
        setContent(matchObject.content);
        setCategory(matchObject.category)
        //change isedit state value to true
        setIsEditing(true);
        //store clickliid in updateid variable
        setUpdateId(clickliId);
        //focus input field
        Titleref.current.focus();
        Titleref.current.style.backgroundColor = 'rgba(204, 234, 244, 1)';
        Contentref.current.style.backgroundColor = 'rgba(204, 234, 244, 1)';
        Categoryref.current.style.backgroundColor = 'rgba(204, 234, 244, 1)';
    }

    //complate function
    function handleComplete(clickliId) {
        //compare clickliid with each element of notearray
        const updatedNoteArray = NoteArray.map((obj) => (
            //if match then toggle complete key status or return as it is
            Number(obj.id) === clickliId ? { ...obj, complete: !obj.complete } : obj
        ))

        setNoteArray(updatedNoteArray);
    }

    //status filter fuction
    function handleStateFilter(e) {
        //update selectcategory state value to user selected cateogry
        setSelectedStatus(e.target.value);
    }

    //category filter fuction
    function handleCategoryFilter(e) {
        //show user selected option on ui
        setSelectedCategory(e.target.value);
    }

    //  console.log(filteredArray)
    return (
               <article className={styles['note-app']}>
            <div className={styles['head-container']}>
                <form className={styles['note-head']}>
                    <div className={styles.wrapper}>
                        <label htmlFor={styles.note}>Note Text</label>
                        <input
                            type="text"
                            name="text"
                            id={styles.note}
                            ref={Titleref}
                            value={Title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <p className={styles.demo}>{error.title}</p>
                    </div>

                    <div className={styles.wrapper}>
                        <label htmlFor={styles.content}>Content</label>
                        <textarea
                            name="content"
                            id={styles.content}
                            rows="5"
                            cols="20"
                            value={Content}
                            ref={Contentref}
                            onChange={(e) => setContent(e.target.value)}
                        ></textarea>
                        <p className={styles.demo}>{error.content}</p>
                    </div>

                    <div className={styles.wrapper}>
                        <label htmlFor={styles.category}>Choose category</label>
                        <select
                            name="category"
                            value={Category}
                            ref={Categoryref}
                            id={styles.category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="work">work</option>
                            <option value="personal">personal</option>
                            <option value="study">study</option>
                            <option value="other">other</option>
                        </select>
                        <p className={styles.demo}>{error.category}</p>
                    </div>

                    <button className={styles['add-btn']} onClick={handleInsert}>
                        {isEditing ? 'Update Note' : 'Add Note'}
                    </button>
                </form>

                <div className={styles['filter-status-container']}>
                    <h2 className={styles['status-heading']}>Filter by Status: </h2>
                    <select
                        name="filter-status"
                        id={styles.filterStatus}
                        value={selectedStatus}
                        onChange={handleStateFilter}
                    >
                        <option value="All">All</option>
                        <option value="Completed">Completed</option>
                        <option value="not-Completed">not-Completed</option>
                    </select>
                </div>

                <div className={styles['filter-category-container']}>
                    <h2 className={styles['category-heading']}>Filter by Category: </h2>
                    <select
                        name="filter-category"
                        id={styles.filterCategory}
                        value={selectedCategory}
                        onChange={handleCategoryFilter}
                    >
                        <option value="all">All</option>
                        <option value="work">Work</option>
                        <option value="personal">personal</option>
                        <option value="study">study</option>
                        <option value="other">other</option>
                    </select>
                </div>
            </div>

            <ul className={styles['note-body']}>
                {filteredArray.map((obj) => (
                    <li
                        className={`${styles.note} ${obj.complete ? styles.completed : styles['not-completed']}`}
                        key={obj.id}
                    >
                        <div className={styles['note-info']}>
                            <div className={styles['category-container']}>
                                <span className={styles.category}>{obj.category}</span>
                            </div>
                            <span className={styles.title}>Title: {obj.title}</span>
                            <span className={styles.content}>content: {obj.content}</span>
                        </div>

                        <div className={styles['icon-container']}>
                            <i className={`${styles.delete} fas fa-trash`} onClick={() => handleDelete(obj.id)}></i>
                            <i className={`${styles.edit} fas fa-pen`} onClick={() => handleEdit(obj.id)}></i>
                            <span className={styles['complete-btn']} onClick={() => handleComplete(obj.id)}>
                                {obj.complete ? 'In-complete' : 'Complete'}
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </article>
    );
}
