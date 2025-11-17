export type PickItem = { sn: number; name: string }

export const isSelected = (list: PickItem[], sn: number) =>
    list.some((x) => x.sn === sn)

export const allChecked = (pageIds: number[], list: PickItem[]) =>
    pageIds.length > 0 && pageIds.every((id) => isSelected(list, id))

export const toggleSelect = (
    list: PickItem[],
    sn: number,
    name: string,
): PickItem[] =>
    isSelected(list, sn)
        ? list.filter((x) => x.sn !== sn)
        : [...list, { sn, name }]

export const toggleHeader = <T,>(
    list: PickItem[],
    pageItems: T[] | undefined,
    getSn: (it: T) => number,
    getName: (it: T) => string,
    checked: boolean,
): PickItem[] => {
    const items = pageItems ?? []
    if (!checked)
        return list.filter((x) => !items.some((it) => getSn(it) === x.sn))
    const have = new Set(list.map((x) => x.sn))
    const add = items
        .filter((it) => !have.has(getSn(it)))
        .map((it) => ({ sn: getSn(it), name: getName(it) }))
    return add.length ? [...list, ...add] : list
}
