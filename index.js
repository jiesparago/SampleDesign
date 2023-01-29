let activeIndex = 0;

const groups = document.getElementsByClassName("card-group");

const handleLoveClick = () =>{
    //Bump active index

    const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;

    const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
    nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

    //active group becomes after

    currentGroup.dataset.status = "after";

    //next group becomes active

    nextGroup.dataset.status = "becoming-active-from-before";

    activeIndex = nextIndex;
}