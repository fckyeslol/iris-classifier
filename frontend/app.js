async function predict() {

    const sl = document.getElementById("sepal_length").value;
    const sw = document.getElementById("sepal_width").value;
    const pl = document.getElementById("petal_length").value;
    const pw = document.getElementById("petal_width").value;

    const backend = "https://iris-backend-0hxk.onrender.com";


    const url = `${backend}/predict?sepal_length=${sl}&sepal_width=${sw}&petal_length=${pl}&petal_width=${pw}`;

    try {

    const response = await fetch(url);
    const data = await response.json();

    document.getElementById("result").innerHTML =
        "Prediction: <b>" + data.prediction + "</b>";

    } catch (error) {
        document.getElementById("result").innerHTML = "Error Conecting to API";
        console.error(err);
    }
}