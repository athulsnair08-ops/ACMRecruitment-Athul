const topics = [
    "HTML",
    "CSS",
    "JavaScript",
    "Python",
    "Git and GitHub",
    "Web Development",
    "Artificial Intelligence"
];

const contentList = document.getElementById("contentList");

topics.forEach(function (topic) {
    const listItem = document.createElement("li");

    listItem.textContent = topic;

    contentList.appendChild(listItem);
});