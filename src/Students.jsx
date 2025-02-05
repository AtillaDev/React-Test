function Students(props) {
    return(
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    )
}

Students.defaultProps = {
    name: "Guest",
    age: 0,
  }

export default Students