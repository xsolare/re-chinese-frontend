//? directives with many refs click target
//? alternative version with self targeting in -> /plugins/clickOutside

export const useOutsideClick = <T extends Array<any>>(refs: T, callback: () => void): void => {
  const handler = (event: MouseEvent): void => {
    //* Check if the mouse click was within the element's ref.
    if (!refs || refs.length === 0) return
    const node = refs.find((x) => {
      if (!x?.value === undefined) return false
      return x?.value?.contains(event?.target as Node)
    })

    if (!node) {
      callback()
    }
  }

  onMounted(() => {
    window.addEventListener("mousedown", handler)
  })

  onBeforeUnmount(() => {
    window.removeEventListener("mousedown", handler)
  })
}
