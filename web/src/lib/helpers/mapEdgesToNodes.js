const mapEdgesToNodes = (data) => {
  if (!data.edges) return [];
  return data.edges.map((edge) => edge.node);
};

export default mapEdgesToNodes;
