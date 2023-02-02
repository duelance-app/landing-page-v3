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
        return response;
    } catch (err) {
        return new Error(err);
    }
};

export default sendWaitlistData;
