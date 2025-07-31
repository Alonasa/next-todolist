const formatDate = (oldDate: number):string => {
    const date = new Date(oldDate);
    const pad = (num:number) => (num < 10 ? '0' + num : num);

    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());

    return `${day}/${month}/${year} at ${hours}:${minutes}`;
}

export default formatDate;
