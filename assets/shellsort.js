async function shellSort() {
    for (let gap = Math.floor(size / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < size; i++) {
            let temp = arr[i];
            let j = i;

            setColor(j, SELECTED);

            while (j >= gap && arr[j - gap] > temp) {
                await sleep(delay);

                setColor(j, UNSORTED);
                setColor(j - gap, COMPARE);

                arr[j] = arr[j - gap];

                setHeight(j, arr[j]);
                setHeight(j - gap, arr[j - gap]);

                j -= gap;
            }

            setColor(j, UNSORTED);
            arr[j] = temp;

            setHeight(j, temp);

            await sleep(delay);
        }
    }

    for (let i = 0; i < size; i++) {
        await sleep(delay);
        setColor(i, SORTED);
    }
}
