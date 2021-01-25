$(document).ready(() => {
    $(".burger-btn").click(function () {
        const devoured = !$(this).data("devoured");
        $.ajax(`/api/burgers/${$(this).data("id")}`, {
            type: "PUT",
            data: { devoured }
        }).then(() => {
            console.log(`changed devoured to ${devoured}`);
            location.reload();
        });
    });

    $("#new-burger-form").submit(event => {
        event.preventDefault();
        $.post("/api/burgers", { burger_name: $("#new-burger").val().trim() }).then(id => {
            console.log(id);
            console.log("success");
            location.reload();
        });
    });
});