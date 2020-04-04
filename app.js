const alert = document.querySelector('.alert');
const form = document.querySelector('.covid-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;

    if ((form.q1[0].checked == false) &&
        form.q1[1].checked == false &&
        form.q1[2].checked == false &&
        form.q2[0].checked == false &&
        form.q2[1].checked == false &&
        form.q2[2].checked == false &&
        form.q2[3].checked == false &&
        form.q2[4].checked == false &&
        form.q2[5].checked == false &&
        form.q2[6].checked == false &&
        form.q3[0].checked == false &&
        form.q3[1].checked == false &&
        form.q3[2].checked == false &&
        form.q3[3].checked == false &&
        form.q3[4].checked == false &&
        form.q3[5].checked == false &&
        form.q3[6].checked == false &&
        form.q3[7].checked == false &&
        form.q3[8].checked == false &&
        form.q3[9].checked == false &&
        form.q4[0].checked == false &&
        form.q4[1].checked == false &&
        form.q5[0].checked == false &&
        form.q5[1].checked == false &&
        form.q5[2].checked == false &&
        form.q5[3].checked == false &&
        form.q6[0].checked == false &&
        form.q6[1].checked == false &&
        form.q6[2].checked == false &&
        form.q6[3].checked == false &&
        form.q7[0].checked == false &&
        form.q7[1].checked == false &&
        form.q7[2].checked == false &&
        form.q7[3].checked == false) {


        alert.classList.remove('d-none');
    }

    //Question 1
    if (form.q1[0].checked == true) {
        score += 8;
    } else if (form.q1[1].checked == true) {
        score += 10;
    } else if (form.q1[2].checked == true)
        score += 14;

    //Question 2
    if (form.q2[0].checked == true) {
        score += 3;
    } if (form.q2[1].checked == true) {
        score += 3;
    } if (form.q2[2].checked == true) {
        score += 3;
    } if (form.q2[3].checked == true) {
        score += 3;
    } if (form.q2[4].checked == true) {
        score += 3;
    } if (form.q2[5].checked == true) {
        score += 3;
    } else if (form.q2[6].checked == true) {
        score += 0;
    }

    //Question 3
    if (form.q3[0].checked == true) {
        score += 3;
    } else if (form.q3[1].checked == true) {
        score += 3;
    } if (form.q3[2].checked == true) {
        score += 3;
    } else if (form.q3[3].checked == true) {
        score += 3;
    } if (form.q3[4].checked == true) {
        score += 3;
    } else if (form.q3[5].checked == true) {
        score += 3;
    } if (form.q3[6].checked == true) {
        score += 3;
    } else if (form.q3[7].checked == true) {
        score += 3;
    } if (form.q3[8].checked == true) {
        score += 3;
    } else if (form.q3[9].checked == true) {
        score += 0;
    }

    //Question 4
    if (form.q4[0].checked == true) {
        score += 14;
    } else if (form.q4[1].checked == true) {
        score += 0;
    }

    //Question 5
    if (form.q5[0].checked == true) {
        score += 14;
    } else if (form.q5[1].checked == true) {
        score += 14;
    } else if (form.q5[2].checked == true) {
        score += 14;
    } else if (form.q5[3].checked == true) {
        score += 0;
    }

    //Question 6
    if (form.q6[0].checked == true) {
        score += 14;
    } else if (form.q6[1].checked == true) {
        score += 14;
    } else if (form.q6[2].checked == true) {
        score += 14;
    } else if (form.q6[3].checked == true) {
        score += 0;
    }

    //Question 7
    if (form.q7[0].checked == true) {
        score += 14;
    } else if (form.q7[1].checked == true) {
        score += 14;
    } else if (form.q7[2].checked == true) {
        score += 0;
    } else if (form.q7[3].checked == true) {
        score += 0;
    }


    // show result on page 
    scrollTo(0, 0);
    result.classList.remove('d-none');
    result.querySelector('span').textContent = `${score}%`;

    $({ Counter: 0 }).animate({
        Counter: $('.Single').text()
    }, {
        duration: 1000,
        easing: 'swing',
        step: function () {
            $('.Single').text(Math.ceil(this.Counter));
        }
    });

});
