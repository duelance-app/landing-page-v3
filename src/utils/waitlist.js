const sendWaitlistData = async (toggle, email) => {
    try {
        const response = await fetch(`https://duelance.app/addWaitlist`, {
            method: "POST",
            body: JSON.stringify({
                email: email,
                type: toggle,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            throw new Error("Something went wrong!");
        } else {
            return;
        }
    } catch (err) {
        throw new Error(err);
    }
};

export default sendWaitlistData;
