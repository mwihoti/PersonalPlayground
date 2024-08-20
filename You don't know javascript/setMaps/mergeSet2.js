function MergeSet(set, map) {
    return Map(
        [...set].map(key=> [key, map.get(key) || undefined])
    )
}